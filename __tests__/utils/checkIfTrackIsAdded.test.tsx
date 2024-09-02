import React from "react";
import checkIfTrackIsAdded from "../../src/utils/checkIfItemIsAdded";
import { TrackData } from "../../src/types";

describe("CheckIfItemIsAdded", () => {
  test("returns true if the track is in the list", () => {
    const itemList = [
      {
        artist: "Goo Goo Dolls",
        artwork: "https://i.ytimg.com/vi/NdYWuo9OFAw/mqdefault.jpg",
        duration: 216,
        title: "Goo Goo Dolls – Iris [Official Music Video] [4K Remaster]",
        videoId: "NdYWuo9OFAw",
      },
      {
        artist: "The Goo Goo Dolls - Topic",
        artwork: "https://i.ytimg.com/vi/CUbJQGqFoi0/mqdefault.jpg",
        duration: 290,
        title: "Iris",
        videoId: "CUbJQGqFoi0",
      },
      {
        artist: "Jonathan Young",
        artwork: "https://i.ytimg.com/vi/JkNua91ZnLw/mqdefault.jpg",
        duration: 216,
        title: "Take On Me - A-ha // (METAL cover by Jonathan Young)",
        videoId: "JkNua91ZnLw"
      },
    ];
    const item = {
        artist: "Jonathan Young",
        artwork: "https://i.ytimg.com/vi/JkNua91ZnLw/mqdefault.jpg",
        duration: 216,
        title: "Take On Me - A-ha // (METAL cover by Jonathan Young)",
        videoId: "JkNua91ZnLw"
      };

    const result = checkIfTrackIsAdded(itemList, item);
    expect(result).toBe(true);
  });

  test("returns false if the item is not in the list", () => {
    const itemList = [
        {
          artist: "Goo Goo Dolls",
          artwork: "https://i.ytimg.com/vi/NdYWuo9OFAw/mqdefault.jpg",
          duration: 216,
          title: "Goo Goo Dolls – Iris [Official Music Video] [4K Remaster]",
          videoId: "NdYWuo9OFAw",
        },
        {
          artist: "The Goo Goo Dolls - Topic",
          artwork: "https://i.ytimg.com/vi/CUbJQGqFoi0/mqdefault.jpg",
          duration: 290,
          title: "Iris",
          videoId: "CUbJQGqFoi0",
        },
        {
          artist: "Jonathan Young",
          artwork: "https://i.ytimg.com/vi/JkNua91ZnLw/mqdefault.jpg",
          duration: 216,
          title: "Take On Me - A-ha // (METAL cover by Jonathan Young)",
          videoId: "JkNua91ZnLw"
        },
      ];;
    const item = {
      artist: "REO Speedwagon - Topic",
      artwork: "https://i.ytimg.com/vi/_EuhePRyTfI/mqdefault.jpg",
      duration: 242,
      title: "Take It On the Run",
      url: "https://mgamma.123tokyo.xyz/get.php/4/50/_EuhePRyTfI.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=t6CZlb7GUpWyuPPBUawghg&s=1724005929&n=Take%20It%20On%20the%20Run",
      videoId: "_EuhePRyTfI",
    };

    const result = checkIfTrackIsAdded(itemList, item);
    expect(result).toBe(false);
  });

  test("returns false if the list is empty", () => {
    const itemList: TrackData[] = [];
    const item: TrackData = {
      artist: "REO Speedwagon - Topic",
      artwork: "https://i.ytimg.com/vi/_EuhePRyTfI/mqdefault.jpg",
      duration: 242,
      title: "Take It On the Run",
      url: "https://mgamma.123tokyo.xyz/get.php/4/50/_EuhePRyTfI.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=t6CZlb7GUpWyuPPBUawghg&s=1724005929&n=Take%20It%20On%20the%20Run",
      videoId: "_EuhePRyTfI",
    };

    const result = checkIfTrackIsAdded(itemList, item);
    expect(result).toBe(false);
  });
});
