import React from "react";
import CafeStyle from "./Cafe.module.css";
import { Button, Image } from "react-bootstrap";
import logoImg from "../../images/icon.png";
import diamondImg from "../../images/diamondIcon.png";

const Cafe = () => {

    // const logoStyle = CafeStyle.logoStyle;

    return (<>
        <div className={CafeStyle.wrapper}>
            <Image src={logoImg} className={CafeStyle.logoImageStyle} />
            <h1 className={CafeStyle.h1Style}>Services From </h1>
            <h1 className={CafeStyle.h1Style}>The Heart of God </h1>
            <div className={CafeStyle.listWrapper}>
                <p>Page A</p>
                <p>Page B</p>
                <p>Page C</p>
                <p>Page D</p>
            </div>
            <Image src={diamondImg} className={CafeStyle.diamondImageStyle} />
            <Button className={CafeStyle.learnButton}>LEARN MORE</Button>
        </div>
    </>)
}

export default Cafe;