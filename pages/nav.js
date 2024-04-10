// export default function Nav({ toggleDarkMode }) {
//   return (
//     <header className="bg-orange-600 h-20">
//       <nav className="flex justify-between">
//         <ul className="flex justify-start">
//           <li className="mr-6 p-6">
//             <a href="#">Home</a>
//           </li>
//           <li className="mr-6 p-6">
//             <a href="#">My work</a>
//           </li>
//           <li className="mr-6 p-6">
//             <a href="#">Contact information</a>
//           </li>
//         </ul>

//         <button
//           className="ml-6 p-6"
//           onClick={toggleDarkMode}
//           aria-label="Toggle dark mode"
//         >
//           Toggle theme
//         </button>
//       </nav>
//     </header>
//   );
// }

// Updated to accept a component prop for the theme toggle button
export default function Nav({ toggleComponent }) {
  return (
    <header className="bg-white  dark:bg-gray-400 h-20 border-b-4">
      <nav className="flex justify-between">
        <ul className="flex justify-start ml-10">
          <li className="mr-6 p-6">
            <a href="#">Home</a>
          </li>
          <li className="mr-6 p-6">
            <a href="#">My work</a>
          </li>
          <li className="mr-6 p-6">
            <a href="#">Contact information</a>
          </li>
        </ul>
        <div className="mr-10 p-6">{toggleComponent}</div>
      </nav>
    </header>
  );
}
