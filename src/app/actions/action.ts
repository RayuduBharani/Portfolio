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
            submissions
          }
        }
        profile {
          ranking
          reputation
          starRating
        }
      }
      allQuestionsCount {
        difficulty
        count
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
    const allQuestions = json.data.allQuestionsCount;

    const allSubmissions = user.submitStats.acSubmissionNum.find((d: { difficulty: string; }) => d.difficulty === "All");
    const totalSolved = allSubmissions?.count ?? 0;
    const totalSubmissions = allSubmissions?.submissions ?? 0;
    const successRate = totalSubmissions > 0 ? ((totalSolved / totalSubmissions) * 100).toFixed(1) : "0.0";

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
            all: totalSolved,
            easy: user.submitStats.acSubmissionNum.find((d : { difficulty : string }) => d.difficulty === "Easy")?.count ?? 0,
            medium: user.submitStats.acSubmissionNum.find((d : { difficulty : string }) => d.difficulty === "Medium")?.count ?? 0,
            hard: user.submitStats.acSubmissionNum.find((d : { difficulty : string }) => d.difficulty === "Hard")?.count ?? 0,
        },
        totals: {
            all: allQuestions.find((d: { difficulty: string; }) => d.difficulty === "All")?.count ?? 0,
            easy: allQuestions.find((d: { difficulty: string; }) => d.difficulty === "Easy")?.count ?? 0,
            medium: allQuestions.find((d: { difficulty: string; }) => d.difficulty === "Medium")?.count ?? 0,
            hard: allQuestions.find((d: { difficulty: string; }) => d.difficulty === "Hard")?.count ?? 0,
        },
        submissions: totalSubmissions,
        successRate: parseFloat(successRate),
        percentageRank: user.profile.ranking > 0 ? Math.round((1 - user.profile.ranking / 1000000) * 100) : 0,
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

export const LeetcodeRecentSubmissions = async (username: string) => {
    const query = `
    query recentSubmissions($username: String!, $limit: Int!) {
      recentSubmissionList(username: $username, limit: $limit) {
        title
        titleSlug
        timestamp
        statusDisplay
        lang
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
            variables: { username, limit: 10 },
        }),
        next: { revalidate: 60 },
    });

    const json = await res.json();

    if (!res.ok || !json?.data?.recentSubmissionList) {
        return [];
    }

    return json.data.recentSubmissionList.map((submission: {
        title: string;
        titleSlug: string;
        timestamp: string;
        statusDisplay: string;
        lang: string;
    }) => ({
        title: submission.title,
        titleSlug: submission.titleSlug,
        time: formatTimestamp(submission.timestamp),
        status: submission.statusDisplay,
        language: submission.lang,
    }));
};

function formatTimestamp(timestamp: string): string {
    const now = Date.now();
    const submissionTime = parseInt(timestamp) * 1000;
    const diff = now - submissionTime;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
}


