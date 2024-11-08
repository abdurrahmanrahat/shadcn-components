export type TInterview = {
  _id: string;
  interviewer: TInterviewer;
  interviewee: TInterviewee;
  scheduledAt: string;
  duration: number;
  status: string;
  interviewFee: number;
  rescheduleCount: number;
  notificationSentAt: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
  meetingLink?: string;
};

export type TInterviewer = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  skills: string[];
  education: string[];
};

export type TInterviewee = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  skills: string[];
  education: string[];
};
