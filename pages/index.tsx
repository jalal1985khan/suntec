import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Banner from '../components/Home-Banner';
import Text from '../components/Home-Text';
import Feature from '../components/Feature-Content';
import Fposts from '../components/Feature-Posts';
import Clogos from '../components/ClientsLogo';
import Banking from '../components/Banking-Opportunities';
import Counts from '../components/Customers-Count';
import Life from '../components/Life-Suntec';
import Testimonials from '../components/Testimonails';
import Solutions from '../components/Industry-Solutions';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <Text/>
    <Feature/>
    <Fposts/>
    <Clogos/>
    <Banking/>
    <Counts/>
    <Life/>
    <Testimonials/>
    <Solutions/>
    <Partners/>
    <Footer/>

    </>
  )
}
