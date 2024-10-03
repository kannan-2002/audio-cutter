import { useState, useRef, useEffect } from 'react';
import { Container, Button, Text, Box, Slider, Paper, Group } from '@mantine/core';
import dynamic from 'next/dynamic';
import { IconCut } from '@tabler/icons-react';
import { useMantineTheme } from '@mantine/core';

// Dynamically import WaveSurfer for client-side only
const WaveSurfer = dynamic(() => import('wavesurfer.js'), { ssr: false });

export default function AudioCutter() {
  const theme = useMantineTheme();
  const [audioFile, setAudioFile] = useState(null);
  const waveformRef = useRef(null);
  const [waveSurfer, setWaveSurfer] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(100);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (waveformRef.current && audioFile) {
      const wavesurferInstance = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: theme.colors.gray[4],
        progressColor: theme.colors.blue[6],
        height: 100,
      });
      setWaveSurfer(wavesurferInstance);

      // Load the audio file into the waveform
      const reader = new FileReader();
      reader.onload = (event) => {
        wavesurferInstance.load(event.target.result);
      };
      reader.readAsDataURL(audioFile);

      wavesurferInstance.on('ready', () => {
        setDuration(wavesurferInstance.getDuration());
      });
    }
  }, [audioFile]);

  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    setAudioFile(file);
  };

  const handleSliderChange = (value) => {
    setStartTime((value[0] / 100) * duration);
    setEndTime((value[1] / 100) * duration);
    if (waveSurfer) {
      waveSurfer.play(startTime, endTime);
    }
  };

  return (
    <Container size="lg" style={{ marginTop: 30 }}>
      {/* Header */}
      <Paper shadow="md" p="lg" style={{ backgroundColor: theme.colors.dark[8] }}>
        <Text align="center" size="xl" weight={700} color={theme.colors.gray[0]}>
          Audio Cutter Tool
        </Text>
        <Text align="center" size="md" color={theme.colors.gray[3]}>
          Free editor to trim and cut any audio file online
        </Text>
      </Paper>

      {/* Upload Section */}
      <Box mt={30} style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type="file"
          accept="audio/*"
          onChange={handleAudioUpload}
          style={{ display: 'none' }}
          id="audio-upload"
        />
        <label htmlFor="audio-upload">
          <Button size="lg" component="span" leftIcon={<IconCut size={20} />}>
            Browse my files
          </Button>
        </label>
      </Box>

      {/* Waveform Display */}
      {audioFile && (
        <Box mt={30}>
          <Paper shadow="xs" p="md" style={{ backgroundColor: theme.colors.dark[7] }}>
            <Text align="center" size="md" weight={500} color={theme.colors.gray[0]}>
              Selected Audio: {audioFile.name}
            </Text>

            {/* Waveform */}
            <Box mt={20}>
              <div ref={waveformRef} id="waveform" />
            </Box>

            {/* Slider for selecting audio trim range */}
            <Box mt={20}>
              <Slider
                min={0}
                max={100}
                value={[startTime / duration * 100, endTime / duration * 100]}
                onChange={handleSliderChange}
                marks={[
                  { value: 0, label: 'Start' },
                  { value: 100, label: 'End' },
                ]}
                color="blue"
              />
            </Box>

            {/* Play Trimmed Audio */}
            <Group position="center" mt={20}>
              <Button
                variant="filled"
                color="blue"
                onClick={() => {
                  if (waveSurfer) {
                    waveSurfer.play(startTime, endTime);
                  }
                }}
              >
                Play Trimmed Audio
              </Button>
            </Group>
          </Paper>
        </Box>
      )}
    </Container>
  );
}
