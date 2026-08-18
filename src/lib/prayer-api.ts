export interface PrayerTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export async function getPrayerTimes(city: string = "Jakarta", country: string = "Indonesia"): Promise<PrayerTimes | null> {
  try {
    const res = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=20`
    );
    const data = await res.json();
    if (data.code === 200) {
      const timings = data.data.timings;
      return {
        Fajr: timings.Fajr,
        Sunrise: timings.Sunrise,
        Dhuhr: timings.Dhuhr,
        Asr: timings.Asr,
        Maghrib: timings.Maghrib,
        Isha: timings.Isha,
      };
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch prayer times", error);
    return null;
  }
}
