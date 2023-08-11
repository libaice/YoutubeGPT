import { YoutubeTranscript } from "youtube-transcript";
async function getVideoTranscript(videoUrl: string) {
  const transcript = await YoutubeTranscript.fetchTranscript(videoUrl)
    .then((result) => {
      const joinedTranscription = result
        .map((item) => item.text)
        .join(" ")
        .replaceAll("\n", " ");
      return joinedTranscription;
    })
    .catch((err) => {
      console.log("error", err);
      return undefined;
    });
  return transcript;
}
export default getVideoTranscript;
