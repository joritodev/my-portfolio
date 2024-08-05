import { GithubIcon } from "../icons/github-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"

export function SocialBtns() {
    return (
        <div className="social">
            <a href="https://www.instagram.com/joriitoo/" target="_blank">
                <InstagramIcon/>
            </a>
            <a href="https://www.linkedin.com/in/joaovcmontenegro/" target="_blank">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/joritodev" target="_blank">
                <GithubIcon/>
            </a>
            <a href="">
                <TwitterIcon/>
            </a>
        </div>
    )
}