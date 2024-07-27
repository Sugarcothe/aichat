import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">
            txt message from ai Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Accusamus voluptate, voluptatem porro autem earum
            non neque dicta officia, soluta perferendis dolor exercitationem.
            Accusantium vel sed aliquid aut architecto iste voluptatem quam
            laboriosam esse soluta, eaque assumenda a debitis cumque excepturi
            nostrum odit odio. Itaque soluta sapiente omnis, illum fugiat sit in
            velit cumque. Ipsam obcaecati architecto culpa, laboriosam illum rem
            aliquid. Aspernatur labore perspiciatis magni, earum eum vitae in,
            recusandae modi provident ut sint. Nobis vero autem, itaque
            deleniti, culpa similique expedita labore dignissimos perspiciatis
            ratione aperiam quo harum repudiandae tenetur at maxime ex porro.
            Illum, harum aspernatur! Nihil, eaque?
          </div>
          <div className="message user">
            Test Message from user Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod libero facere laudantium deleniti enim magni
            error molestiae officia quo voluptate suscipit ipsam corrupti rerum
            adipisci maiores aut, mollitia beatae nostrum.
          </div>
          <div className="message">txt message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">txt message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">txt message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">txt message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">txt message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">txt message from ai</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
