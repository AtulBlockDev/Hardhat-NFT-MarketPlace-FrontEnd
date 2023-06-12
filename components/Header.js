import {ConnectButton} from "web3uikit"
import Link from "next/link"
export default function Header(){
    return (
      <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
        <h1 className="py-4 px-4 font-bold text-3xl">NFT MARKETPLACE</h1>
        <Link href = "/">
            <a>HOME</a>
        </Link>
        <Link href = "/sell-nft">
            <a>SELL NFT</a>
        </Link>
        <ConnectButton moralisAuth = {false} />
      </nav>
    );

}