export const classes = {
    header: {
        container: "text-6xl font-bold color-gradient-to-r from-red-500 to-cyan-500 relative drop-shadow-md m-5",
        firstChild: "text-6xl text-white",
        secondChild: "absolute -left-5 top-0 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 -rotate-12 "
    },
    card: {
        firstDiv: "bg-white rounded-md shadow-md p-0 text-gray-700 max-w-[18rem] max-h-[34rem] drop-shadow-xl overflow-scroll z-10 cursor-pointer",
        pic: "flex flex-row overflow-x-auto snap-mandatory snap-x scrollbar-hide",
        picButtons: "absolute top-40 bg-white h-10 w-10 rounded-full flex justify-center items-center opacity-20 hover:opacity-10",
        images: "object-cover w-96  snap-center"
    },
    buttons: {
        buttons: "w-20 h-20 bg-white rounded-full flex justify-center items-center border-2 drop-shadow-md bg-gradient-to-br"
    }
}