import * as React from "react";
import { SVGProps } from "react";
const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={104}
    height={110}
    viewBox="0 0 104 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={104} height={110} fill="white" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.2927 16.7451C50.1602 20.455 49.9386 23.6889 49.7998 23.932C49.6613 24.1751 48.7403 24.9844 47.753 25.7306C46.7657 26.4768 45.2111 27.7613 44.2988 28.5847C41.6132 31.0083 41.3215 30.6637 41.3138 25.0615L41.3089 21.6265H33.7709H26.2329V33.0063C26.2329 41.3875 26.1221 44.4974 25.8122 44.8089C25.5556 45.0668 24.2899 45.2338 22.5691 45.237C21.017 45.2401 19.569 45.3589 19.3513 45.5012C19.1339 45.6435 18.8443 46.4331 18.7072 47.2557C18.5705 48.078 18.3331 48.8292 18.1799 48.9243C18.0267 49.0194 17.788 50.1697 17.6498 51.4804C17.5113 52.791 17.1853 54.3789 16.9251 55.0085L16.4518 56.1535H13.2259H10L10.2069 60.8217C10.4028 65.2369 11.1181 69.1438 12.2232 71.8316C12.4623 72.4129 12.8841 73.4434 13.1603 74.1217C13.437 74.7999 13.9254 75.9097 14.2462 76.5879C15.0315 78.248 18.9565 84.2564 20.1153 85.5719C20.6275 86.1533 21.3063 86.9481 21.6236 87.3381C21.9412 87.7281 22.9881 88.6794 23.9505 89.452C24.9126 90.2246 26.017 91.1442 26.4047 91.4958C28.2948 93.2095 36.2542 97.7269 37.3832 97.7269C37.6521 97.7269 38.3694 97.9439 38.977 98.2088C41.8667 99.4694 45.629 99.9866 52.0023 99.9997C58.399 100.013 61.0966 99.6481 65.5005 98.1757C68.7674 97.0832 73.0332 95.0035 74.1881 93.9395C74.4511 93.6974 74.8918 93.4991 75.167 93.4991C75.4426 93.4991 75.668 93.3617 75.668 93.1936C75.668 93.0256 76.2598 92.4809 76.9828 91.9827C77.7061 91.4849 78.8497 90.5745 79.5246 89.9597C80.1996 89.3446 80.9888 88.6607 81.278 88.4398C82.3572 87.6164 86.1861 83.1635 86.1861 82.7319C86.1861 82.4853 86.3071 82.2309 86.4547 82.1661C87.0921 81.8874 91.4452 73.6365 91.4452 72.7067C91.4452 72.5109 91.597 72.075 91.7824 71.7386C92.6667 70.1352 93.6308 64.8596 93.8096 60.6455L94 56.1535H91.1734C89.6189 56.1535 88.0976 56.0573 87.7926 55.9396C87.3217 55.7582 87.2379 54.9447 87.2379 50.551V45.3765L85.4316 43.9922C84.438 43.2309 83.4521 42.4441 83.2403 42.244C82.8687 41.8928 81.9161 41.1032 79.0415 38.7635C78.2937 38.1547 77.3863 37.3796 77.0255 37.0403C76.6644 36.7014 76.2511 36.4202 76.1063 36.4157C75.9615 36.4111 75.2329 35.8551 74.4868 35.1797C73.7407 34.5047 72.1238 33.2096 70.8931 32.3017C69.6629 31.3937 68.6559 30.5228 68.6559 30.3664C68.6559 30.2099 68.4438 30.0821 68.1844 30.0821C67.9249 30.0821 67.4123 29.7484 67.0449 29.3411C66.4699 28.7031 66.3602 27.9181 66.2557 23.703C66.1362 18.8808 66.12 18.7949 65.2039 18.0917C62.6568 16.1367 62.1554 15.7283 60.9819 14.6548C60.2853 14.0175 58.6154 12.7097 57.2708 11.7482C54.9803 10.1099 54.6914 10 52.68 10H50.534L50.2927 16.7451ZM55.9073 15.1086C56.0184 15.3993 56.2502 15.6371 56.4223 15.6371C56.5945 15.6371 57.0191 15.9147 57.3662 16.2536C57.7129 16.5926 58.7563 17.5043 59.6847 18.2794C63.2083 21.2209 62.8398 18.376 62.566 40.5293C62.4331 51.2517 62.2336 60.3031 62.1221 60.6434C61.7796 61.6894 60.8641 63.6642 60.5388 64.0588C59.1006 65.8045 58.2504 66.5211 56.6541 67.3336C51.5798 69.9164 45.3818 67.8603 42.5998 62.6714C41.8716 61.3132 41.8404 60.7935 41.7356 48.3144C41.6584 39.1109 41.738 35.3668 42.0108 35.3668C42.2215 35.3668 42.7418 35.0099 43.1664 34.5741C43.591 34.1383 45.1802 32.7727 46.698 31.5399C48.8577 29.7858 49.5298 29.4024 49.7882 29.7784C49.9905 30.0725 50.0305 35.6536 49.8909 44.2001L49.6634 58.142L50.6009 59.2616C51.6836 60.5546 52.0479 60.6135 53.167 59.676L53.9814 58.9939L53.9004 37.196C53.8559 25.207 53.9327 15.2139 54.0712 14.9892C54.4313 14.4036 55.6689 14.4839 55.9073 15.1086ZM37.4522 35.153C37.4522 43.6283 37.3846 44.83 36.8976 45.0178C36.5926 45.1355 35.1838 45.2317 33.7674 45.2317C31.8931 45.2317 31.0415 45.0809 30.6404 44.6782C30.1681 44.2033 30.0896 42.8296 30.0896 35.048C30.0896 30.056 30.1948 25.8659 30.3234 25.7369C30.4517 25.6076 32.1083 25.5019 34.0048 25.5019H37.4522V35.153ZM69.3144 36.0714C70.1414 36.8465 70.9233 37.4842 71.052 37.4888C71.1803 37.4934 71.9165 38.0483 72.6879 38.7223C73.4592 39.3963 74.2481 40.0674 74.4409 40.214C74.6337 40.3605 76.6497 41.9699 78.9212 43.79L83.0507 47.1L82.9532 51.5385L82.8554 55.9773L79.6123 56.0788L76.3692 56.1799V58.6123C76.3692 59.9497 76.2339 61.1282 76.0687 61.2311C75.9036 61.3336 75.6743 62.3314 75.5597 63.4482C75.445 64.5647 75.1859 65.5339 74.9836 65.6016C74.7817 65.6692 74.6162 65.9292 74.6162 66.179C74.6162 66.6539 73.5006 69.2107 72.7647 70.4213C71.7949 72.0173 68.988 75.4453 68.13 76.0816C67.6238 76.4568 66.7111 77.2058 66.1021 77.7456C65.4931 78.2857 64.6356 78.818 64.1959 78.929C63.7566 79.0396 63.3969 79.2718 63.3969 79.4445C63.3969 79.6174 63.1999 79.7598 62.9586 79.7608C62.7178 79.7622 62.0572 80.0057 61.4914 80.3023C56.8343 82.7425 47.916 82.7228 42.4831 80.2597C41.8755 79.9842 41.2048 79.7587 40.993 79.7587C40.7809 79.7587 40.6077 79.6174 40.6077 79.4445C40.6077 79.2718 40.1971 79.027 39.6951 78.9001C39.193 78.7736 37.1812 77.0522 35.2245 75.0747C31.7781 71.592 30.5138 69.7138 29.1279 66.0184C28.5602 64.5045 27.6497 59.2722 27.6413 57.4747L27.6353 56.1535H24.6759C22.75 56.1535 21.6257 56.0055 21.456 55.73C21.0685 55.0997 21.2891 52.6952 21.9096 50.7888L22.4569 49.1072H29.9546H37.4522V55.0758C37.4522 58.3586 37.5963 61.1338 37.7723 61.2431C37.9483 61.3526 38.199 62.0752 38.3291 62.8493C38.4592 63.6233 38.699 64.2568 38.862 64.2568C39.0247 64.2568 39.267 64.6013 39.3998 65.0224C39.6803 65.9109 39.8956 66.1882 41.9855 68.3549C44.8584 71.3331 47.0872 72.3192 51.6184 72.6158C55.7397 72.8857 60.0129 71.028 62.8321 67.7405C64.4056 65.9053 64.9939 64.8318 65.8764 62.183C66.472 60.3947 66.5358 58.9808 66.5436 47.4337C66.5534 32.927 66.4429 33.3808 69.3144 36.0714ZM24.0522 62.4071C24.6633 65.7534 25.1492 67.3885 26.2091 69.6652C30.9657 79.8848 40.972 86.4527 51.7853 86.4527C59.6956 86.4527 66.7806 83.4725 72.2622 77.8396C74.3396 75.7046 77.0704 71.8439 77.0704 71.0417C77.0704 70.7979 77.21 70.5985 77.38 70.5985C77.5504 70.5985 77.7762 70.2419 77.8817 69.8058C78.1959 68.5061 79.2021 65.535 79.5506 64.8783C79.729 64.5418 79.8752 63.8876 79.8752 63.425C79.8752 62.962 79.9738 62.0879 80.0944 61.4823L80.3135 60.3813H85.1781C89.6686 60.3813 90.0427 60.4313 90.0427 61.0299C90.0427 61.8892 88.7147 68.2545 88.3234 69.271C86.1205 74.9929 85.8236 75.5926 83.2312 79.559C80.9214 83.093 75.1877 88.4969 71.4555 90.6562C69.0998 92.0193 65.9998 93.4991 65.4998 93.4991C65.1916 93.4991 64.7895 93.6453 64.6065 93.8243C64.4235 94.0032 63.4057 94.3274 62.3451 94.5451C61.2845 94.7625 59.6279 95.107 58.6637 95.311C56.5286 95.7627 44.7392 95.5147 43.2372 94.9865C42.6587 94.7833 41.2388 94.3383 40.0818 93.9976C38.1955 93.4427 34.7989 91.9306 32.5161 90.6298C30.7897 89.6461 27.3899 86.9118 25.3515 84.8677C23.0351 82.5452 19.9221 78.6211 19.9221 78.0239C19.9221 77.8153 19.8015 77.6448 19.6542 77.6448C19.507 77.6448 18.9996 76.8123 18.5267 75.7952C18.0541 74.778 17.5678 73.8662 17.4461 73.7693C16.9956 73.4103 15.0613 67.1697 14.6616 64.7853C14.4344 63.4288 14.1659 61.8829 14.0652 61.3502L13.8822 60.3813H18.7823H23.6819L24.0522 62.4071Z"
      fill="url(#paint0_linear_34_23)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_34_23"
        x1={52}
        y1={10}
        x2={52}
        y2={100}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#35AC5D" />
        <stop offset={1} stopColor="#1486C3" />
      </linearGradient>
    </defs>
  </svg>
);
export default Logo;