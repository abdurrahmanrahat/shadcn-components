import InterviewAnother from "@/components/InterviewAnother";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { interviewData } from "@/utils/interviewData";

const InterviewsAnotherPage = () => {
  const pendingData = interviewData.interviews.filter(
    (item) => item.status === "pending"
  );

  const confirmedData = interviewData.interviews.filter(
    (item) => item.status === "confirmed"
  );

  const cancelledData = interviewData.interviews.filter(
    (item) => item.status === "cancelled"
  );

  return (
    <div className="my-20">
      <div className="text-center font-medium text-[24px] my-8">
        Interviews Page: {interviewData.interviews.length}
      </div>

      <div>
        {/* tab */}
        <Tabs defaultValue="pending" className="">
          <TabsList className="grid grid-cols-3 w-full md:w-[400px] bg-[#ebf8ff]">
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <TabsContent value="pending">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {pendingData?.map((interview) => (
                <InterviewAnother interview={interview} key={interview._id} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="confirmed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {confirmedData?.map((interview) => (
                <InterviewAnother interview={interview} key={interview._id} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="cancelled">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {cancelledData?.map((interview) => (
                <InterviewAnother interview={interview} key={interview._id} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InterviewsAnotherPage;
