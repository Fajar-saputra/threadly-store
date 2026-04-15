import LatestCollection from "../components/LatestCollection";
import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";

export default function Home() {
    return (
        <div>
            <Hero />
            <LatestCollection />
            <BestSeller />
        </div>
    );
}
