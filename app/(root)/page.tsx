import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {

    const loggedIn = {
        firstName: "Brandon",
        lastName: "Codes",
        email: "contact@developer.dev"
    }

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type="greeting"
                title="Welcome, "
                user={loggedIn?.firstName || "Geust"}
                subtext="Access and manage your account and transactions efficiently." 
                />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.83}
                />
            </header>

            RECENT TRANSACTIONS

        </div>

        <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 1234.56}, {currentBalance: 1234.56}]}
        />

    </section>
  )
}

export default Home