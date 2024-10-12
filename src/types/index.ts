export type TInterview = {
  _id: string;
  interviewer: string;
  interviewee: string;
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
