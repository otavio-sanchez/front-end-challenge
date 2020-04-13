import * as React from 'react';
import { Text } from '../../../../typography';
import { Content, Image, Infos } from './style';
import { Props } from './types';
import { Image as ImageType, Artist } from '../../types';

const Album = ({ images, name, height, artists, onClick }: Props): JSX.Element => {
    const urlImage = (imagesList: ImageType[]): string => {
        if (imagesList && imagesList.length > 0) {
            return imagesList[0].url;
        }

        return '';
    };

    const nameArtist = (artistsList: Artist[]): string => {
        if (artistsList && artistsList.length > 0) {
            return artistsList[0].name;
        }

        return '';
    };

    return (
        <Content onClick={(): Function => onClick()}>
            <Image src={urlImage(images)} height={height} />
            <Infos>
                <Text type="subtitle">
                    <>{name}</>
                </Text>
                <Text type="regular">
                    <>{nameArtist(artists)}</>
                </Text>
            </Infos>
        </Content>
    );
};

export default Album;