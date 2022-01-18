import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonLoadingItem: React.FC = () => {
    return (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item testID='item-skeleton' flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item width={RFValue(60)} height={RFValue(60)} borderRadius={RFValue(50)} />
            <SkeletonPlaceholder.Item marginLeft={RFValue(20)}>
              <SkeletonPlaceholder.Item width={RFValue(120)} height={RFValue(20)} borderRadius={RFValue(4)} />
              <SkeletonPlaceholder.Item
                marginTop={RFValue(6)}
                width={RFValue(80)}
                height={RFValue(20)}
                borderRadius={RFValue(4)}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      );
}

export default SkeletonLoadingItem;