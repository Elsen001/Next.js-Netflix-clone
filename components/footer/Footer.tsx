import Link from 'next/link';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children?: ReactNode;
}

const Footer: React.FC<LayoutProps> = () => {
    return (
        <footer>
            <div className="section-container">
                <div className="first-line">
                    <Link href={`/`}>Questions? Contact us.</Link>
                </div>
                <div className="links">
                    <div className="section">
                        <Link href={`/`}>FAQ</Link>
                        <Link href={`/`}>Investor Relations</Link>
                        <Link href={`/`}>Privacy</Link>
                        <Link href={`/`}>Speed Test</Link>
                    </div>
                    <div className="section">
                        <Link href={`/`}>Help Center</Link>
                        <Link href={`/`}>Jobs</Link>
                        <Link href={`/`}>Cookie Preferences</Link>
                        <Link href={`/`}>Legal Notices</Link>
                    </div>
                    <div className="section">
                        <Link href={`/`}>Acoount</Link>
                        <Link href={`/`}>Ways to Watch</Link>
                        <Link href={`/`}>Corporate Information</Link>
                        <Link href={`/`}>Only on Netflix</Link>
                    </div>
                    <div className="section">
                        <Link href={`/`}>Media Center</Link>
                        <Link href={`/`}>Terms of Use</Link>
                        <Link href={`/`}>Contact Us</Link>
                    </div>
                </div>
                <div className="languages">
                    <select name="" id="">
                        <option value="English">English</option>
                        <option value="Russian">Russian</option>
                    </select>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
