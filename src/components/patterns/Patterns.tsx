import { Link } from "react-router-dom";

export const Patterns = () => (
  <div className="flex-row px-96 py-10 justify-center dark:text-white text-stone-700">
    <span className="flex mb-4 text-stone-400 text-4xl font-calpsBold uppercase">
      patterns
    </span>
    <span className="text-white text-xl">
      Here is the collections of useful algorithms and patterns for solving
      problems.
    </span>
    <ul className="flex-row mt-4 text-2xl">
      <li>
        <Link to="/patterns/graph" className="text-blue-500">
          Graph Algorithms
        </Link>
        :&ensp;
        <span>BFS, DFS, Tarjan's, Kosaraju</span>
      </li>
      <li>
        <Link to="/patterns/number_theory" className="text-blue-500">
          Number Theory Algorithms
        </Link>
        :&ensp;
        <span>Fast Power, Fourier Transformation</span>
      </li>
      <li>
        <Link to="/patterns/data_structures" className="text-blue-500">
          Data Structures Algorithms
        </Link>
        :&ensp;
        <span>Binary Indexed Tree, Segment Tree</span>
      </li>
      <li>
        <Link to="/patterns/string" className="text-blue-500">
          String Algorithms
        </Link>
        :&ensp;
        <span>KMP, Rabin-Karp</span>
      </li>
      <li>
        <Link to="/patterns/geometry" className="text-blue-500">
          Geometry Algorithms
        </Link>
        :&ensp;
        <span>Convex Hull</span>
      </li>
      <li>
        <Link to="/patterns/algebra" className="text-blue-500">
          Algebra Algorithms
        </Link>
        :&ensp;
        <span>GCD</span>
      </li>
    </ul>
  </div>
);
