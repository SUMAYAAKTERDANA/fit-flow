"use client";


import { usePlan } from "@/app/PlanContext";
import { IFitLog } from "@/app/types/fitlog";
import toast from "react-hot-toast";

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
  </svg>
);
const BookmarkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
);

const ActionButtons = ({ workout }: { workout: IFitLog  }) => {
  const { addToPlan, addToSaved, isInPlan, isInSaved } = usePlan();

  const handleAddToPlan = () => {
    if (isInPlan(workout.id)) {
      toast.error(" ");
      return;
    }
    addToPlan(workout);
    toast.success("Added to today's plan ✅");
  };

  const handleSave = () => {
    if (isInSaved(workout.id)) {
      toast.error(" ");
      return;
    }
    addToSaved(workout);
    toast.success("Saved for later 🔖");
  };

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button
        onClick={handleAddToPlan}
        className={`px-6 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wide transition flex items-center gap-2 ${
          isInPlan(workout.id)
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-lime-400 text-black hover:bg-lime-300"
        }`}
      >
        <PlusIcon /> {isInPlan(workout.id) ? "Already in Plan" : "Add to today's plan"}
      </button>

      <button
        onClick={handleSave}
        className={`px-6 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wide transition flex items-center gap-2 border ${
          isInSaved(workout.id)
            ? "border-gray-800 text-gray-500 cursor-not-allowed"
            : "border-gray-700 text-white hover:bg-gray-800"
        }`}
      >
        <BookmarkIcon /> {isInSaved(workout.id) ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default ActionButtons;