import "./singlePost.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <Topbar />
      <div className="singlePostFeed">
        <div className="singlePostContent">
          <img
            className="singlePostImg"
            src="https://images.unsplash.com/photo-1501747315-124a0eaca060?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnQlMjBwb3N0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="singlePostTitleContainer">
            <h2 className="singlePostTitle">Lorem ipsum dolor sit amet</h2>
            <div className="singlePostIcons">
              <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i class="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
          </div>
          <div className="singlePostInfo">
            <div className="singlePostInfoLeft">
              <b>Author</b>: Lyes
            </div>
            <div className="singlePostInfoRight">1 day ago</div>
          </div>
          <div className="singlePostText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            possimus aperiam est illum a nesciunt commodi provident ullam, non
            iste expedita, id, sapiente doloribus? Ipsam explicabo quaerat odio
            recusandae inventore cum corporis laboriosam repellendus quia,
            aliquam sit rerum iure temporibus, porro autem doloremque ut
            necessitatibus hic! A, laborum. Similique quisquam dolorum aperiam
            eius. Laborum non illum eos, voluptatum blanditiis libero,
            aspernatur accusantium, atque veritatis a voluptate quasi sunt cum
            sed? Autem cupiditate vitae dolore nihil, harum tenetur eum sapiente
            laboriosam impedit quo maxime perspiciatis provident. Temporibus
            doloribus magni iusto eligendi quasi sunt est tenetur debitis
            repudiandae aspernatur sequi, optio in. quisquam dolorum aperiam
            eius. Laborum non illum eos, voluptatum blanditiis libero,
            aspernatur accusantium, atque veritatis a voluptate quasi sunt cum
            sed? Autem cupiditate vitae dolore nihil, harum tenetur eum sapiente
            laboriosam impedit quo maxime perspiciatis provident. Temporibus
            doloribus magni iusto eligendi quasi sunt est tenetur debitis
            repudiandae aspernatur sequi, optio in.
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
