import * as React from 'react';
import { Text } from '../../typography';
import { Content, Image, Infos, Audio, PlayerComponent } from './style';
import { Props } from './types';
import { Image as ImageType, Artist } from '../../list/Albums/types';

const Player = ({ images, name, artists, onClick, preview }: Props): JSX.Element => {
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
            <Image src={urlImage(images)} />

            <Infos>
                <Text type="subtitle">{name}</Text>
                <Text type="regular">{nameArtist(artists)}</Text>

                {preview && (
                    <PlayerComponent>
                        <Audio src={preview} preload="auto" controls autoPlay controlsList="nodownload" />
                    </PlayerComponent>
                )}
            </Infos>
        </Content>
    );
};

export default Player;
