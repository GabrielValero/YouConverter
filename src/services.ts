import TrackPlayer, { 
	Event, 
	State, 
	AppKilledPlaybackBehavior,
	Capability,
	RepeatMode,
	PlayerOptions, } from 'react-native-track-player';
	
	export const DefaultRepeatMode = RepeatMode.Queue;

	  
let wasPausedByDuck = false;

export async function PlaybackService() {
	TrackPlayer.addEventListener(Event.RemotePause, () => {
		TrackPlayer.pause();
	});

	TrackPlayer.addEventListener(Event.RemotePlay, () => {
		TrackPlayer.play();
	});

	TrackPlayer.addEventListener(Event.RemoteNext, () => {
		TrackPlayer.skipToNext();
	});

	TrackPlayer.addEventListener(Event.RemotePrevious, () => {
		TrackPlayer.skipToPrevious();
	});

	TrackPlayer.addEventListener(Event.RemoteSeek, (event) => {
		TrackPlayer.seekTo(event.position);
	});

	TrackPlayer.addEventListener(
		Event.RemoteDuck,
		async ({ permanent, paused }) => {
		if (permanent) {
			TrackPlayer.pause();
			return;
		}
		if (paused) {
			const playerState = await TrackPlayer.getState();
			wasPausedByDuck = playerState !== State.Paused;
			TrackPlayer.pause();
		} else {
			if (wasPausedByDuck) {
			TrackPlayer.play();
			wasPausedByDuck = false;
			}
		}
		}
	);
}

type ErrorWithCode = Error & { code?: string };

const tpInit = async (options: PlayerOptions | undefined) => {
	const setup = async () => {
	  try {
		await TrackPlayer.setupPlayer(options);
	  } catch (error) {
		return (error as ErrorWithCode).code;
	  }
	};
	while ((await setup()) === 'android_cannot_setup_player_in_background') {
	  // A timeout will mostly only execute when the app is in the foreground,
	  // and even if we were in the background still, it will reject the promise
	  // and we'll try again:
	  await new Promise((resolve) => setTimeout(resolve, 1));
	}
  };

export async function setupPlayer() { // inicializa el track player

	await tpInit({
		autoHandleInterruptions: true,
	  });

	let isSetup = false;
	await TrackPlayer.updateOptions({
		android: {
			appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback
		},
		capabilities: [
			Capability.Play,
			Capability.Pause,
			Capability.SkipToNext,
			Capability.SkipToPrevious,
			Capability.SeekTo,
		],
		compactCapabilities: [
			Capability.SkipToPrevious,
			Capability.Play,
			Capability.Pause,
			Capability.SkipToNext,
		],
		progressUpdateEventInterval: 2,
	})
	await TrackPlayer.setRepeatMode(DefaultRepeatMode);
	return true
}