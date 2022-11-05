import useGetData from "../useGetData";
import PostList from "./PostList";
import SideBar from "./SideBar";

const Home = () => {
  const { data, loading, err } = useGetData('http://localhost:3001');
  return (
    <div className="py-5">
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col-8">
            <div className="p-3 border">
            {err && <div>{ err }</div>}
            {loading && <div>loading</div>}
            {data && <PostList posts={data} title='Xpress Blog' />}
            </div>
          </div>
          <div className="col-4">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
