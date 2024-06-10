"use client"
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  const params = usePathname();
  const category = params.split('/')[2];

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      setCategoryList(resp.data.data);
    }).catch(err => {
      console.error("Failed to fetch categories:", err.response ? err.response.data : err.message);
    });
  };

  return (
    <div className='h-screen mt-5 fixed flex flex-col'>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryList && categoryList.map((item, index) => (
              <CommandItem key={index}>
                <Link href={'/search/' + item?.attributes?.Name} className={`p-2 flex gap-2 text-[16px] text-blue-600 rounded-md items-center cursor-pointer w-full ${category === item.attributes.Name && 'bg-blue-100'}`}>
                  <Image src={item.attributes.Icon.data[0].attributes.url} alt="icon" width={25} height={25} />
                  <label>{item.attributes.Name}</label>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
