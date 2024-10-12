import Interview from "@/components/Interview";
import { interviewData } from "@/utils/interviewData";

const InterviewsPage = () => {
  return (
    <div className="my-20">
      <div className="text-center font-medium text-[24px] my-8">
        Interviews Page: {interviewData.interviews.length}
      </div>

      <div>
        {/* tab */}
        <div>
          <button>Upcoming</button>
          <button>Approved</button>
          <button>Cancelled</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {interviewData.interviews.map((interview) => (
            <Interview interview={interview} key={interview._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewsPage;
