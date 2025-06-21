"use server"

export const LeetcodeProfileInfo = async (username: string) => {
    const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
        profile {
          ranking
          reputation
          starRating
        }
      }
    }
  `;

    const res = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables: { username },
        }),
        next: { revalidate: 60 }, // optional: for ISR
    });

    const json = await res.json();

    if (!res.ok || !json?.data?.matchedUser) {
        throw new Error("Failed to fetch profile info");
    }

    const user = json.data.matchedUser;

    return {
        username: user.username,
        realName: user.profile.realName,
        avatar: user.profile.userAvatar,
        country: user.profile.countryName,
        school: user.profile.school,
        ranking: user.profile.ranking,
        reputation: user.profile.reputation,
        starRating: user.profile.starRating,
        github: user.profile.githubUrl,
        linkedin: user.profile.linkedinUrl,
        twitter: user.profile.twitterUrl,
        about: user.profile.aboutMe,
        solved: {
            all: user.submitStats.acSubmissionNum.find((d: { difficulty: string; }) => d.difficulty === "All")?.count ?? 0,
            easy: user.submitStats.acSubmissionNum.find((d : { difficulty : string }) => d.difficulty === "Easy")?.count ?? 0,
            medium: user.submitStats.acSubmissionNum.find((d : { difficulty : string }) => d.difficulty === "Medium")?.count ?? 0,
            hard: user.submitStats.acSubmissionNum.find((d : { difficulty : string }) => d.difficulty === "Hard")?.count ?? 0,
        },
        rank : {
            global: user.profile.ranking,
            country: user.profile.countryRanking,
            school: user.profile.schoolRanking,
            rating: user.profile.starRating,
        },
        streak : {
            current: user.profile.streak,
            max: user.profile.maxStreak,
        },
    };
};

