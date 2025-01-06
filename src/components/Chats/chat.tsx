"use client";
import LaptopIcon from "@/components/icons/chats/laptop";
import SearchIcon from "@/components/icons/search";
import Image from "next/image";
import { useState } from "react";
import EmojiIcon from "../icons/chats/emoji";
import AttachmentIcon from "../icons/chats/attachment";
import SendIcon from "../icons/chats/send";
import BackBtn from "../back";

interface Chat {
  src: string;
  name: string;
  org: string;
  message: string;
  day: string;
  unread: number;
  selected?: boolean;
}

const chats: Chat[] = [
  {
    src: "https://picsum.photos/seed/1/512/512",
    name: "Universitas Udayana",
    org: "Universitas Udayana",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad sint placeat aliquam, provident totam tenetur hic molestiae animi, modi porro amet fugiat sequi voluptatum! Sed earum dicta praesentium, similique facere totam a nobis fuga voluptas explicabo error veniam voluptatum, esse maiores quis possimus dolore numquam expedita accusantium reiciendis doloremque?",
    day: "Senin",
    unread: 99,
  },
  {
    src: "https://picsum.photos/seed/2/512/512",
    name: "HIMAIF",
    org: "Himpunan Mahasiswa Informatika",
    message: "Halo kak, ada yang bisa kami bantu?",
    day: "Selasa",
    unread: 1,
  },
];

export default function Chats() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center container max-w-7xl mx-auto pt-32 h-screen">
        {selected === 0 && (
          <div className="flex items-center justify-between w-full py-5">
            <BackBtn />
            <div>
              <h1 className={`text-2xl font-bold`}>{"Chat (99+)"}</h1>
            </div>
            <div className={`relative`}></div>
          </div>
        )}
        <div className="flex flex-1 w-full">
          <div className="w-[30rem] flex items-center flex-col gap-3 ">
            {selected !== 0 && (
              <div className="flex items-center justify-between w-full py-5">
                <BackBtn />
                <div>
                  <h1 className={`text-2xl font-bold`}>{"Chat (99+)"}</h1>
                </div>
                <div className={`relative`}></div>
              </div>
            )}
            <div className="flex items-center w-full border-2 border-black/40 rounded-lg gap-3 p-2">
              <SearchIcon className="size-8" />
              <input
                className=" text-xl w-full h-full focus:ring-transparent focus:outline-none"
                placeholder="Cari Penjual"
              />
            </div>
            <div className="flex-1 flex flex-col items-center w-full overflow-y-auto">
              {chats.map((chat, index) => (
                <ChatList
                  key={index}
                  name={chat.name}
                  org={chat.org}
                  src={chat.src}
                  day={chat.day}
                  message={chat.message}
                  unread={chat.unread}
                  selected={selected === index + 1}
                  onClick={() => setSelected(index + 1)}
                />
              ))}
            </div>
          </div>
          {selected === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-3">
              <LaptopIcon className="size-80" />
              <div className="flex flex-col items-center justify-center gap-1">
                <h1 className="font-bold text-2xl">
                  Selamat Datang di Chat UniBiz
                </h1>
                <p className="text-lg">Balas chat penjual sekarang!</p>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-white flex w-full px-3 py-5 gap-2 items-center border-l-2 border-black">
                <span className="font-bold text-xl">
                  {chats[selected - 1].name}
                </span>
                <span className="text-xl">-</span>
                <span className="text-xl">{chats[selected - 1].org}</span>
              </div>
              <div className="flex-1 w-full flex flex-col justify-end bg-[#DBDBDB] px-2 text-xl">
                <div className="self-center bg-white py-2 px-3 my-10 text-base rounded-full">
                  Senin, 11 Nov 2024
                </div>
                <div className="chat chat-end">
                  <div className="chat-bubble bg-white text-black">
                    halo kak
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble bg-white text-black">
                    halo kak, ada yang bisa kami bantu?
                  </div>
                </div>
              </div>
              <div className="bg-[#DBDBDB] w-full p-2">
                <div className="flex items-center w-full border-2 border-black/40 rounded-lg gap-3 p-2 bg-white">
                  <EmojiIcon className="size-8" />
                  <AttachmentIcon className="size-8" />
                  <input
                    className=" text-xl w-full flex-1 h-full focus:ring-transparent focus:outline-none"
                    placeholder="Ketik Pesan"
                  />
                  <SendIcon className="size-8" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ChatList(props: Chat & { onClick: () => void }) {
  return (
    <div
      onClick={props.onClick}
      className={`w-full flex items-center justify-between p-3 ${
        props.selected ? "bg-black/10" : "bg-white"
      } hover:bg-black/5 cursor-pointer transition-all duration-300`}
    >
      <div className="flex items-center w-full gap-3">
        <div className="relative size-14 rounded-full flex items-center justify-center">
          <div className="size-16 absolute bg-gradient-to-b from-primary to-secondary rounded-full p-5"></div>
          <Image
            src={props.src}
            alt="abc"
            fill
            className="object-contain rounded-full"
          />
        </div>
        <div className="flex flex-col flex-1 items-start justify-center">
          <div>
            <span className="text-sm flex items-center gap-1">
              <span className="font-bold line-clamp-1">{props.name}</span>
              <span>-</span>
              <span className="line-clamp-1">{props.org}</span>
            </span>
          </div>
          <span className="line-clamp-1 text-sm">{props.message}</span>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-1">
        <span className="text-sm">{props.day}</span>
        <div className="bg-[#18A0FB] size-8 text-sm flex items-center justify-center rounded-full font-bold">
          <span>{props.unread}</span>
        </div>
      </div>
    </div>
  );
}
