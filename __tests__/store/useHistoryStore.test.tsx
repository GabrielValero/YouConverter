/**
 * @jest-environment jsdom
 */

import react from "react";
import { renderHook, act } from "@testing-library/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useHistoryStore } from "../../src/store/useHistoryStore";

describe("useHistoryStore Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should store last track played", async () => {
    const initialItem = {
      artist: "Goo Goo Dolls",
      artwork: "https://i.ytimg.com/vi/NdYWuo9OFAw/mqdefault.jpg",
      duration: 216,
      title: "Goo Goo Dolls – Iris [Official Music Video] [4K Remaster]",
      videoId: "NdYWuo9OFAw",
    };
    const newTrack = {
      artist: "Jonathan Young",
      artwork: "https://i.ytimg.com/vi/JkNua91ZnLw/mqdefault.jpg",
      duration: 216,
      title: "Take On Me - A-ha // (METAL cover by Jonathan Young)",
      videoId: "JkNua91ZnLw",
    };

    const { result } = renderHook(() => useHistoryStore());

    await act(async () => {
      //play first track
      await result.current.storeLastTrack(initialItem);
      expect(AsyncStorage.setItem).toHaveBeenCalledWith("lastTrackPlayed", JSON.stringify(initialItem));
      //play second track
      await result.current.storeLastTrack(newTrack);
      const response = await result.current.getLastTrack();
      //response should return second track
      expect(response).toStrictEqual(newTrack);
    });

  });
  test("should store in first index", async () => {
    const itemList = ["Jonathan Young", "Imagine dragons"];
    const newItem = "Chayanne";
    
    
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(
      JSON.stringify(itemList)
    );

    
    const { result } = renderHook(() => useHistoryStore());

    await act(async () => {
      await result.current.storeNewSearch(newItem);

      const response = await result.current.getLastSearch();
      expect(response).toBe(newItem); // Now we expect "Chayanne" to be the first item
    });
  });

  test("should store last 5 items added", async () => {
    const itemList = [
      "Jonathan Young",
      "Imagine dragons",
      "item3",
      "item4",
      "item5",
    ];
    const newItem = "Chayanne";

    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(
      JSON.stringify(itemList)
    );
    const { result } = renderHook(() => useHistoryStore());

    await act(async () => {
      await result.current.storeNewSearch(newItem);
    });
    const response = JSON.parse((await AsyncStorage.getItem("history"))!!);

    const responseExpected = [
      "Chayanne",
      "Jonathan Young",
      "Imagine dragons",
      "item3",
      "item4",
    ];
    
    expect(response).toStrictEqual(responseExpected); // Now we expect "Chayanne" to be the first item
  });

});
