import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import { firestore } from "@/firebase/firebase";
import useHasMounted from "@/hooks/useHasMounted";
import { doc, setDoc } from "firebase/firestore";
import { useState, useRef } from "react";

export default function Home() {
  const [loadingProblem, setLoadingProblems] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const hasMounted = useHasMounted();
  const problemsRef = useRef<HTMLDivElement>(null);

  const scrollToProblems = () => {
    problemsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFilter = (difficulty: string) => {
    setActiveFilter(difficulty);
    // Here you would typically filter the problems based on difficulty
    // For now, we'll just update the UI state
  };

  if (!hasMounted) return null;

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-[#e0e0e0] font-mono">
      <header className="bg-[#222] border-b border-[#333] sticky top-0 z-50">
        <div className="max-w-[1300px] mx-auto px-5">
          <Topbar />
        </div>
      </header>

      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#1E1E1E] border-b border-[#333]">
        <div className="max-w-[1300px] mx-auto px-5 text-center">
          <h1 className="text-[3.5rem] leading-tight font-mono text-[#7cfc00] mb-8 tracking-tight">
            &ldquo;LEVEL UP YOUR DSA PROFICIENCY AND EXCEL IN CODING!&rdquo;
          </h1>
          <p className="text-[1.25rem] text-[#ccc] max-w-[800px] mx-auto mb-12 leading-relaxed font-mono">
            Challenge yourself with problems of varying difficulty and become 
            <br />a better coder.
          </p>
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={scrollToProblems}
              className="px-8 py-4 bg-[#ff8c00] text-[#1E1E1E] text-lg font-bold rounded hover:bg-[#ff9f33] transition-all"
            >
              Start Solving
            </button>
            <button 
              onClick={scrollToProblems}
              className="px-8 py-4 border-2 border-[#ff8c00] text-[#ff8c00] text-lg font-bold rounded hover:bg-[#ff8c00]/10 transition-all"
            >
              Explore Contests
            </button>
          </div>
        </div>
      </section>

      <section ref={problemsRef} className="py-10">
        <div className="max-w-[1300px] mx-auto px-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl text-[#e0e0e0]">Problems</h2>
            <div className="flex gap-3">
              <button 
                onClick={() => handleFilter("all")}
                className={`px-4 py-2 bg-[#2a2a2a] border border-[#444] text-[#ccc] rounded-md transition-all ${
                  activeFilter === "all" ? "bg-[#333] border-[#ff8c00] text-[#ff8c00]" : "hover:bg-[#333] hover:border-[#ff8c00] hover:text-[#ff8c00]"
                }`}
              >
                All
              </button>
              <button 
                onClick={() => handleFilter("easy")}
                className={`px-4 py-2 bg-[#2a2a2a] border border-[#444] text-[#ccc] rounded-md transition-all ${
                  activeFilter === "easy" ? "bg-[#333] border-[#ff8c00] text-[#ff8c00]" : "hover:bg-[#333] hover:border-[#ff8c00] hover:text-[#ff8c00]"
                }`}
              >
                Easy
              </button>
              <button 
                onClick={() => handleFilter("medium")}
                className={`px-4 py-2 bg-[#2a2a2a] border border-[#444] text-[#ccc] rounded-md transition-all ${
                  activeFilter === "medium" ? "bg-[#333] border-[#ff8c00] text-[#ff8c00]" : "hover:bg-[#333] hover:border-[#ff8c00] hover:text-[#ff8c00]"
                }`}
              >
                Medium
              </button>
              <button 
                onClick={() => handleFilter("hard")}
                className={`px-4 py-2 bg-[#2a2a2a] border border-[#444] text-[#ccc] rounded-md transition-all ${
                  activeFilter === "hard" ? "bg-[#333] border-[#ff8c00] text-[#ff8c00]" : "hover:bg-[#333] hover:border-[#ff8c00] hover:text-[#ff8c00]"
                }`}
              >
                Hard
              </button>
            </div>
          </div>

          <div className="relative overflow-x-auto">
            {loadingProblem && (
              <div className="animate-pulse max-w-[1200px] mx-auto">
                {[...Array(10)].map((_, i) => (
                  <LoadingSkeleton key={i} />
                ))}
              </div>
            )}
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase border-b border-[#333]">
                <tr className="bg-[#2a2a2a]">
                  <th scope="col" className="px-1 py-3 w-0 font-medium text-[#ccc]">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 w-0 font-medium text-[#ccc]">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 w-0 font-medium text-[#ccc]">
                    Difficulty
                  </th>
                  <th scope="col" className="px-6 py-3 w-0 font-medium text-[#ccc]">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 w-0 font-medium text-[#ccc]">
                    Solution
                  </th>
                </tr>
              </thead>
              <ProblemsTable setLoadingProblems={setLoadingProblems} />
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#222] border-t border-b border-[#333]">
        <div className="max-w-[1300px] mx-auto px-5">
          <h2 className="text-3xl text-center text-[#e0e0e0] mb-12">Why CodeArena?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-3xl mb-4 text-[#ff8c00]">📚</div>
              <h3 className="text-xl text-[#e0e0e0] mb-3">Diverse Question Collection</h3>
              <p className="text-[#bbb]">Access a wide range of data structures and algorithms questions to strengthen your problem-solving skills.</p>
            </div>
            <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-3xl mb-4 text-[#ff8c00]">🎯</div>
              <h3 className="text-xl text-[#e0e0e0] mb-3">Difficulty Levels</h3>
              <p className="text-[#bbb]">Problems categorized into easy, medium, and hard difficulty levels to match your current skill level.</p>
            </div>
            <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-3xl mb-4 text-[#ff8c00]">⚡</div>
              <h3 className="text-xl text-[#e0e0e0] mb-3">Code Execution</h3>
              <p className="text-[#bbb]">Run JavaScript code and validate against test cases to ensure your solution is correct and optimal.</p>
            </div>
            <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-3xl mb-4 text-[#ff8c00]">🔒</div>
              <h3 className="text-xl text-[#e0e0e0] mb-3">User Authentication</h3>
              <p className="text-[#bbb]">Sign up, log in, and enjoy a personalized coding experience with progress tracking and achievements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-[1300px] mx-auto px-5">
          <div className="bg-[#222] border border-[#333] rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#333] px-5 py-3 flex justify-between items-center border-b border-[#444]">
              <div className="flex items-center gap-2 text-[#ccc]">
                <span className="text-[#ff8c00]">📄</span>
                twoSum.js
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
            </div>
            <div className="p-5 overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-[#e0e0e0]">
                  <span className="text-[#7f848e]">{/* Problem: Two Sum */}</span>{"\n"}
                  <span className="text-[#7f848e]">{/* Find two numbers in the array that add up to the target */}</span>{"\n\n"}
                  <span className="text-[#c678dd]">function</span> <span className="text-[#61afef]">twoSum</span>(nums, target) {"{"}{"\n"}
                  {"  "}<span className="text-[#c678dd]">const</span> map = <span className="text-[#c678dd]">new</span> Map();{"\n\n"}
                  {"  "}<span className="text-[#c678dd]">for</span> (<span className="text-[#c678dd]">let</span> i = <span className="text-[#d19a66]">0</span>; i {"<"} nums.length; i++) {"{"}{"\n"}
                  {"    "}<span className="text-[#c678dd]">const</span> complement = target - nums[i];{"\n\n"}
                  {"    "}<span className="text-[#c678dd]">if</span> (map.has(complement)) {"{"}{"\n"}
                  {"      "}<span className="text-[#c678dd]">return</span> [map.get(complement), i];{"\n"}
                  {"    "}{"}"}{"\n\n"}
                  {"    "}map.set(nums[i], i);{"\n"}
                  {"  "}{"}"}{"\n\n"}
                  {"  "}<span className="text-[#c678dd]">return</span> []; <span className="text-[#7f848e]">{/* No solution found */}</span>{"\n"}
                  {"}"}{"\n\n"}
                  <span className="text-[#7f848e]">{/* Test cases */}</span>{"\n"}
                  console.log(twoSum([<span className="text-[#d19a66]">2</span>, <span className="text-[#d19a66]">7</span>, <span className="text-[#d19a66]">11</span>, <span className="text-[#d19a66]">15</span>], <span className="text-[#d19a66]">9</span>)); <span className="text-[#7f848e]">{/* Output: [0, 1] */}</span>{"\n"}
                  console.log(twoSum([<span className="text-[#d19a66]">3</span>, <span className="text-[#d19a66]">2</span>, <span className="text-[#d19a66]">4</span>], <span className="text-[#d19a66]">6</span>));      <span className="text-[#7f848e]">{/* Output: [1, 2] */}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center space-x-12 mt-4 px-6">
      <div className="w-6 h-6 shrink-0 rounded-full bg-[#222]"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-[#222]"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-[#222]"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-[#222]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};