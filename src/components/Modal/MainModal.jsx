import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const MainModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] py-14">
        {/* Customized Header without Close Icon */}
        <DialogHeader>
          <DialogTitle className="text-center leading-[24px]">
            Are you sure you want to cancel the schedule?
          </DialogTitle>
        </DialogHeader>

        {/* Optional Content Section */}
        <div className="flex justify-center gap-2 pt-1">
          <button
            className="bg-[#0694a2] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#047481] hover:shadow-lg transition-all duration-300"
            onClick={onClose}
          >
            Back
          </button>
          <button
            className="bg-[#D55656] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#B03737] hover:shadow-lg transition-all duration-300"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>

        {/* Footer Section */}
        {/* <DialogFooter className="flex justify-center"></DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default MainModal;
