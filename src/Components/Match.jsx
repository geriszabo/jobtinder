import React from "react";

function Match() {
  return (
    <div className="absolute flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-br from-green-500 to-cyan-500">
      <div className="max-h-2/3 w-2/6 bg-white rounded-md flex flex-col justify-center items-center">
        <div className=" italic flex justify-center items-center flex-col text-6xl leading-3 p-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
          <h3>It's a</h3>
          <h1 className=" text-8xl font-black tracking-tighter text-fill">MATCH!</h1>
          <h1 className="text-transparent text-stroke text-8xl font-black tracking-tighter text-fill leading-3">MATCH!</h1>
          <h1 className="text-stroke text-8xl font-black tracking-tighter text-fill leading-16">MATCH!</h1>
        </div>
      </div>
      <form action="" className="flex justify-between gap-2 mt-10 h-10 bg-white rounded-md p-2 w-2/6">
          <input type="text" placeholder="write me an email.." className="flex grow"/>
          <button type="submit" className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">SUBMIT</button>
      </form>
    </div>
  );
}

export default Match;
