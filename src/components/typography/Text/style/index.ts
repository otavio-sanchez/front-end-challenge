import styled from 'styled-components';
import colors from '../../../../assets/theme/colors';
import sizes from '../../../../assets/theme/sizes';

const TitleLarge = styled.h1<{ type?: string }>`
    font-size: ${sizes.font.fontSizeLarge}px;
    color: ${colors.light};
    padding-bottom: 30px;
`;

const SubTitle = styled.h2<{ type?: string }>`
    font-size: ${sizes.font.fontSizeMedium}px;
    color: ${colors.light};
    padding-bottom: 10px;
`;

const Regular = styled.span<{ type?: string }>`
    font-size: ${sizes.font.fontSizeMedium}px;
    color: ${colors.main};
`;

const Default = styled.span<{ type?: string }>`
    font-size: ${sizes.font.fontSizeMedium}px;
    color: ${colors.light};
`;

const Label = styled.label<{ type?: string }>`
    font-size: ${sizes.font.fontSizeMedium}px;
    color: ${colors.light};

    @media (max-width: ${sizes.screen.tabletWidth + 1}px) {
        font-size: ${sizes.font.fontSizeSmall}px;
    }
`;

export { TitleLarge, SubTitle, Regular, Default, Label };
