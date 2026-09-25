
import ActionButtons from "@/app/component/shared/ActionButtons";
import { IFitLog } from "@/app/types/fitlog";
import Image from "next/image";
import Link from "next/link";
import React from "react";


// const ClockIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="10" strokeWidth="2" />
//     <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
//   </svg>
// );
// const FireIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
//   </svg>
// );
// const StarIcon = () => (
//   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//   </svg>
// );
// const PlusIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
//   </svg>
// );
// const BookmarkIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
//   </svg>
// );

const getWorkout = async (id: string) => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data.find((item: IFitLog ) => item.id.toString() === id);
};

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;
  const workout = await getWorkout(resolvedParams.id);

  if (!workout) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Workout Not Found!</h1>
        <Link href="/library" className="text-lime-400 hover:underline">
          ← Back to Library
        </Link>
      </div>
    );
  }

  
  const specs = {
    EQUIPMENT: workout.equipment || "Barbell, Bench",
    DIFFICULTY: workout.difficulty || "Intermediate",
    SETS: workout.sets || 4,
    REPS: workout.reps || "6-8",
    DURATION: `${workout.duration} min`,
    CALORIES: `${workout.caloriesBurned} kcal`,
    RATING: workout.rating || "4.8",
  };

  const instructions = workout.instructions || [
    "Lie on the bench with eyes under the bar and feet planted.",
    "Unrack with locked elbows and lower the bar to mid-chest.",
    "Press up in a slight arc until elbows lock without bouncing.",
    "Keep shoulder blades pinched and a natural arch in the back.",
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-16">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          
          <div className="flex flex-col">
            
            
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight">
              {workout.name}
            </h1>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              {workout.description ||
                "A compound press that builds chest thickness, triceps, and pressing power from a stable bench."}
            </p>

            
            <div className="flex flex-wrap gap-2 mt-5">
              {workout.muscleGroups?.map((muscle: string) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 text-black px-4 py-1 text-xs font-bold uppercase tracking-wider"
                >
                  {muscle}
                </span>
              ))}
            </div>

           
            <div className="mt-8 border border-gray-800 rounded-xl overflow-hidden bg-[#111111]">
              {Object.entries(specs).map(([label, value], idx, arr) => (
                <div
                  key={label}
                  className={`flex justify-between px-5 py-3.5 ${
                    idx !== arr.length - 1 ? "border-b border-gray-800" : ""
                  }`}
                >
                  <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                    {label}
                  </span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4">
                Instructions
              </h3>
              <ol className="space-y-3 text-sm text-gray-400 list-decimal list-inside marker:text-lime-400">
                {instructions.map((step: string, i: number) => (
                  <li key={i} className="pl-1 leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

          
            {/* <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-lime-400 text-black px-6 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-lime-300 transition flex items-center gap-2">
                <PlusIcon /> Add to today's plan
              </button>
              <button className="border border-gray-700 text-white px-6 py-3.5 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition flex items-center gap-2">
                <BookmarkIcon /> Save for later
              </button>
            </div> */}
<ActionButtons workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;