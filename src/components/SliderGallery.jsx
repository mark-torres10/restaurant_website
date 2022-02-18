import Image from "next/image";
import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Spacer, Text } from "@chakra-ui/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const SliderGallery = ({ imgs_list=[] }) => {

    return (
        <Box padding="10">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={2}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {imgs_list?.map((img) => (
                    <SwiperSlide key={img.obj_id}>
                        <Box>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={img.width}
                                height={img.height}
                            />
                            <Text>{img.text}</Text>
                            <Spacer paddingTop="10"/>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}

export default SliderGallery;