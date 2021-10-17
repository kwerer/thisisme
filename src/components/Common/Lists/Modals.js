import SGBadmintonStopGIF from "../Images/SGBadmintonStop.gif";
import MahjongAppGIF from "../Images/MahjongAppGIFFinal.gif";
import ArmyPicture from "../Images/ArmyPicture.jpg";
import BadmintonGIF from "../Images/BadmintonGIF.gif";
import QlassroomGIF from "../Images/Qlassroom1.gif";
import AIALogo from "../Images/AIALogo.png";
export const modalList = {
  "Part-Time Badminton Coach": {
    image: BadmintonGIF,
    description: (
      <div>
        Help with coaching a primary school
        badminton team & adults with a passion to
        learn. This started when I was approached
        by players from my badminton channel!
      </div>
    ),
  },
  "Assistant Front-end Developer": {
    image: QlassroomGIF,
    description: (
      <div>
        I was an intern at Qlassroom.ai which is a
        start-up from SUTD that focused on
        providing accessible and effective tuition
        for students in Singapore. I worked as a
        Front-end Developer, mainly working with
        React to build the website. I've
        encountered many technical problems along
        the way which I had to learn many other
        libraries, frameworks to solve them.
        Thankfully, I had a patient mentor which
        would guide me through some of those
        difficulties.
        <div>
          Here are some of the works that I have
          done!
        </div>
      </div>
    ),
  },
  "Administrative Assistant": {
    image: AIALogo,
    description:
      "In this job I had to ensure that the data that is keyed in is properly managed and that there are no errors, I used excel spreadsheets to create tables and graphs to visualise the different trends and implemented certain checks on each of the data cells to ensure correctness of data.",
  },
  "Platoon Commander": {
    image: ArmyPicture,
    description:
      "During my NS, I was fortunate enough to qualify for OCS (Officer Cadet School) , which gave me the opportunity to learn leadership skills and lead my men. As a cadet, I was constantly put in stressful situations which taught me how to think-critically and react under pressure. After I commissioned I was placed in a training unit which I was handed the role to be in-charge of NSmen training. It was really challenging as I had to deal with large numbers of older men which are more experienced than I am, however being able to work with them definitely an insight on how to deal with a different crowd.",
  },
  "Mahjong App (Project)": {
    image: MahjongAppGIF,
    description:
      "During the first Circuit Breaker (Safe Management Protocols for COVID-19) in Singapore my family, like most others, decided to play mahjong to pass time, however we did not have enough chips to go around. I searched for an online mahjong application where I could track the scores for my family. However I realised that it does not exist, so I created an one called, Mahjong Captain. It is used to calculate and keep track of scores while we are playing. This was build using react native, redux and deployed on Expo Go. I also used this opportunity to learn and design the UI/UX interface (albeit a simple desgin) on Figma before coding and making it happen. Ihe biggest takeaway from this is the problem solving and steps that I had to figure out along the way to make this idea come to life.",
  },
  "SG Badminton Stop (Project)": {
    image: SGBadmintonStopGIF,
    description: (
      <div>
        Admist the COVID-19 pandemic, many people
        have disconnected from their friends
        through the pro-longed restrictions that
        kept them from meeting. One such area
        where this is evident is the badminton
        scene in Singapore. In an effort to help
        badminton enthusiast in Singapore reach
        out to more like-minded enthusiast, I
        created SG Badminton Stop Channel on
        Telegram that comes with a bot that can be
        used to invite other players to play.
        <div>
          Here is the link to our channel:{" "}
          <a href="https://t.me/SGBadmintonStop">
            https://t.me/SGBadmintonStop
          </a>
        </div>
      </div>
    ),
  },
};
