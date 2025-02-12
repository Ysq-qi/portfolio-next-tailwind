"use client";

import { toast } from "@/hooks/usetoast";
import { CheckIcon } from "@/components/ui/icons/icons";
import Loading from "@/components/ui/feedback/loading";

const ToastList = {
  showAddSuccess: () => {
    const newToast = toast({
      title: "加入成功",
      description: "",
      action: <CheckIcon className="w-6 h-6" />,
      variant: "base",
      onOpenChange: (open) => {
        if (!open) newToast?.dismiss();
      },
    });
  },

  showDeleteSuccess: () => {
    const newToast = toast({
      title: "刪除成功",
      description: "",
      action: <CheckIcon className="w-6 h-6" />,
      variant: "base",
      onOpenChange: (open) => {
        if (!open) newToast?.dismiss();
      },
    });
  },

  showSubmitFail: () => {
    const newToast = toast({
      title: "提交未成功",
      description: "",
      variant: "base",
      onOpenChange: (open) => {
        if (!open) newToast?.dismiss();
      },
    });
  },

  showSelectWarning: () => {
    const newToast = toast({
      title: "請先選取選項",
      description: "",
      variant: "base",
      onOpenChange: (open) => {
        if (!open) newToast?.dismiss();
      },
    });
  },

  showAddLoading: () => {
    return toast({
      title: "",
      description: (
        <div className="flex flex-col items-center justify-center space-y-2">
          <Loading className="w-6 h-6" />
          <span>Loading</span>
        </div>
      ),
      variant: "loading",
    });
  },
};

export default ToastList;