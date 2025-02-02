import robotIcon from '../assets/nft-robot.jpg'
import bearIcon from '../assets/nft-bear.jpg'
import catIcon from '../assets/nft-cat.jpg'
import blockIcon from '../assets/nft-block.jpg'
import waterIcon from '../assets/nft-water.jpg'
import worldIcon from '../assets/nft-world.jpg'
import suiIcon from '../assets/sui.svg'
import ethereumIcon from '../assets/ethereum.svg'
import binanceIcon from '../assets/binance.svg'
import solanaIcon from '../assets/solana.png'
import starIcon from '../../public/assets/avatars/star.svg'
import threeDBirdIcon from '../../public/assets/avatars/3d-bird-ava.jpg'
import bigFootIcon from '../../public/assets/avatars/bigfoot-ava.jpg'
import birdIcon from '../../public/assets/avatars/bird-ava.png'
import catAvaIcon from '../../public/assets/avatars/cat-ava.jpg'
import horseIcon from '../../public/assets/avatars/horse-ava.jpg'
import manIcon from '../../public/assets/avatars/man-ava.jpg'
import shotIcon from '../../public/assets/avatars/shot-ava.jpg'
import memeCoinIcon from '../../public/assets/memecoin.png'


const navItems = [
	{ text: 'Collections', id: 1, link: '' },
	{ text: 'Tools', id: 2, link: '' },
	{ text: 'Create NFT', id: 3, link: '/swap' },
	{ text: 'Launch Coin', id: 4, link: '' },
	{ text: 'Swap', id: 5, link: '' },
]

const collectionItems = [
	{ text: 'Robots', id: 1, link: '', img: robotIcon },
	{ text: 'Tanuka', id: 2, link: '', img: bearIcon },
	{ text: 'THIS CAT', id: 3, link: '', img: catIcon },
	{ text: 'block', id: 4, link: '', img: blockIcon },
	{ text: 'water PAY', id: 5, link: '', img: waterIcon },
	{ text: 'NFT world', id: 6, link: '', img: worldIcon }
]

const whatsNftItems = [
	{ text: 'Sui', id: 1, img: suiIcon },
	{ text: 'Ethereum', id: 2, img:  ethereumIcon},
	{ text: 'Binance', id: 3, img: binanceIcon },
	{ text: 'Solana', id: 4, img: solanaIcon },
]

const swapNavItems = [
	{ text: 'Swap', link: '', id: 1 },
	{ text: 'Amplify', link: '', id: 2 },
	{ text: 'Launch & Ape', link: '', id: 3 },
	{ text: 'More', link: '', id: 4 },
]

const trendingNowItems = [
	{
		icon: starIcon,
		id: 1,
		avatar: threeDBirdIcon,
		checkIcon: '',
		text: 'PAW$ VOICHES',
		iconSolana: solanaIcon,
		textSolana: 5307,
		nextTextSolana: 10000,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 2,
		avatar: bigFootIcon,
		checkIcon: '',
		text: 'Portals',
		iconSolana: solanaIcon,
		textSolana: 5307,
		nextTextSolana: 10000,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 3,
		avatar: birdIcon,
		checkIcon: '',
		text: 'Mad Lads',
		iconSolana: solanaIcon,
		textSolana: 5307,
		nextTextSolana: 10000,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 4,
		avatar: catAvaIcon,
		checkIcon: '',
		text: 'Retardio',
		iconSolana: solanaIcon,
		textSolana: 5307,
		nextTextSolana: 10000,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 5,
		avatar: horseIcon,
		checkIcon: '',
		text: 'DeGods',
		iconSolana: solanaIcon,
		textSolana: 5307,
		nextTextSolana: 10000,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 6,
		avatar: manIcon,
		checkIcon: '',
		text: 'ai16z partners',
		iconSolana: solanaIcon,
		textSolana: 5307,
		nextTextSolana: 10000,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 7,
		avatar: shotIcon,
		checkIcon: '',
		text: 'P9 Nodes',
		iconSolana: solanaIcon,
		textSolana: 5307,
		nextTextSolana: 10000,
		minted: 'Minted',
	},
]


const trendingMemeItems = [
	{
		icon: starIcon,
		id: 1,
		avatar: threeDBirdIcon,
		checkIcon: '',
		text: 'PAW$ VOICHES',
		iconMemecoin: memeCoinIcon,
		textMemecoin: 4900,
		nextTextMemecion: 9700,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 2,
		avatar: bigFootIcon,
		checkIcon: '',
		text: 'Portals',
		iconMemecoin: memeCoinIcon,
		textMemecoin: 4900,
		nextTextMemecion: 9700,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 3,
		avatar: birdIcon,
		checkIcon: '',
		text: 'Mad Lads',
		iconMemecoin: memeCoinIcon,
		textMemecoin: 4900,
		nextTextMemecion: 9700,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 4,
		avatar: catAvaIcon,
		checkIcon: '',
		text: 'Retardio',
		iconMemecoin: memeCoinIcon,
		textMemecoin: 4900,
		nextTextMemecion: 9700,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 5,
		avatar: horseIcon,
		checkIcon: '',
		text: 'DeGods',
		iconMemecoin: memeCoinIcon,
		textMemecoin: 4900,
		nextTextMemecion: 9700,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 6,
		avatar: manIcon,
		checkIcon: '',
		text: 'ai16z partners',
		iconMemecoin: memeCoinIcon,
		textMemecoin: 4900,
		nextTextMemecion: 9700,
		minted: 'Minted',
	},
	{
		icon: starIcon,
		id: 7,
		avatar: shotIcon,
		checkIcon: '',
		text: 'P9 Nodes',
		iconMemecoin: memeCoinIcon,
		textMemecoin: 4900,
		nextTextMemecion: 9700,
		minted: 'Minted',
	},
]

export { navItems,
		collectionItems,
		whatsNftItems,
		swapNavItems,
		trendingNowItems,
		trendingMemeItems
		}

