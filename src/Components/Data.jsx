import Geri1 from "../Images/geri.jpg";
import Geri2 from "../Images/geri2.png";
import Person1 from "../Images/person1.jpg";
import Person2 from "../Images/person2.jpg";

//Database of persons who have cards
export const persons = [
  // {
  //   name: "Sam",
  //   age: 135,
  //   bio: "Hi I'm An idiot",
  //   img1: Person1,
  //   rotate: 25,
  //   translateY: "1rem",
  //   translateX: "5rem"
  // },
  // {
  //   name: "Igor",
  //   age: 69,
  //   bio: "Well what a fucking waste of time this is",
  //   img1: Person2,
  //   rotate: -25,
  //   translateY: "1rem",
  //   translateX: "-5rem"
  // },
  {
    name: "Geri",
    age: 35 + "🚀",
    img1: Geri1,
    img2: Geri2,
    rotate: 0,
    translateY: "0rem",
    translateX: "0rem",
  },
];

export function Bio() {
  return (
    <div>
      <p>Hi I'm Geri 🙋🏻‍♂️</p>
      <br />

      <p>
        I'm a self thaught programmer, and I coded this little app because I'm
        looking for a serious work relationship as a frontend developer. <br />
        React would be my preferred framework of choice, but I'm planning to
        learn TS and Angular in the very near future. 👨‍💻
        <br />
        <br />
        Right now I am working as a software engineer and I'm doing scripting in
        JavaScript on a cloud☁️ based low-code platform in Budapest Hungary.
      </p>
      <br />
      <p>
        You can find me on{" "}
        <a
          href="https://www.linkedin.com/in/gergoszabo87/"
          target="_blank"
          className="text-blue-500 font-bold"
        >
          LinkedIn
        </a>{" "}
        and on{" "}
        <a
          href="https://github.com/geriszabo"
          target="_blank"
          className="text-blue-500 font-bold"
        >
          Github
        </a>{" "}
        as well.
      </p>
      <br />
      <p>
        I speak native hungarian and I'm pretty confident in my english and
        german skills as well. 🇭🇺🇬🇧🇩🇪
      </p>
      <br />
      <p>So why should you hire me?🤔</p>
      <p>
        Well I really like what I do because I love intellectual challenges, so
        I am therefore by default motivated by coding.🧠
      </p>
      <br />
      <p>
        If you think we would make a good team, just press the green heart💚 and
        write me on LinkedIn.
      </p>
    </div>
  );
}
