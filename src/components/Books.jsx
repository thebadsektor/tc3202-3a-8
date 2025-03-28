export default function Books() {
  return(
    <div className="Collection bg-gradient-to-br from-one to-six w-full h-screen px-40 pt-40 pb-20">
      <div className="Title text-4xl md:text-6xl font-narrAIte font-semibold text-softBlack mb-10">Collections</div>
      <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-neutral-50 rounded-3xl shadow-xl flex flex-row items-center justify-evenly gap-4 px-4"
  >
    <svg
      class="stroke-softBlack shrink-0 rounded-full"
      height="50"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 100 100"
      width="50"
      x="0"
      xmlns="http://www.w3.org/2000/svg"
      y="0"
    >
      <path
        d="M17.9,60.7A14.3,14.3,0,0,0,32.2,75H64.3a17.9,17.9,0,0,0,0-35.7h-.4a17.8,17.8,0,0,0-35.3,3.6,17.2,17.2,0,0,0,.4,3.9A14.3,14.3,0,0,0,17.9,60.7Z"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      ></path>
    </svg>
    <div>
      <span class="text-xl font-bold text-eight">"Book Title"</span>
      <p class="line-clamp-3 font-narrAIte text-sm">
        "Short Description"
      </p>
    </div>
  </div>
    </div>
  )
}