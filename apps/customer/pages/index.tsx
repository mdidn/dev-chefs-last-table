import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("@features/home/view"), {
	ssr: false,
});

const Home = () => {
	return <HomeView />;
};

export default Home;
