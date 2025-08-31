

import { useState } from "react";
import Favourite from "./favourite";
import FavouriteList from "./favouriteList";
import Logo from "./logo";
import Search from "./search";

export default function Header(){
	const [showFevModal, setShowFevModal] = useState(false);
    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10 mt-[-100px]">
		<nav className="container flex items-center justify-between py-6">
			<Logo />

			<div className="flex items-center gap-4 relative">
				<Search />
				<Favourite onShow = {() => setShowFevModal(!showFevModal)}/>
				{showFevModal && <FavouriteList />}

			</div>
		</nav>
	</header>
    );
}