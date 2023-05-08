import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const MobileMenu = () => {
  const { pathname } = useRouter();

  return (
    <div className="hidden pt-36 sm:flex flex-col w-48 min-h-screen flex-none bg-white shadow">
      <ul>
        <li>
          <Link className={`flex px-4 py-2 items-center text-base text-black ${ pathname === '/personal-center' ? 'bg-gray-100' : ''}`} href="/personal-center">
            <img src="/assets/images/personal/wallet.png" />
            <span className="m-3">钱包</span>
          </Link>
        </li>
        <li>
          <Link className={`flex px-4 py-2 items-center text-base text-black ${ pathname === '/personal-center/accounts' ? 'bg-gray-100' : ''}`} href="/personal-center/accounts">
            <img src="/assets/images/personal/trading-account.png" />
            <span className="m-3">交易账户</span>
          </Link>
        </li>
        <li>
          <Link className={`flex px-4 py-2 items-center text-base text-black ${ pathname === '/personal-center/approval-records' ? 'bg-gray-100' : ''}`} href="/personal-center/approval-records">
            <img src="/assets/images/personal/trasfer-records.png" />
            <span className="m-3">审批记录</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
