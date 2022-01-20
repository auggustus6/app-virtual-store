import React from 'react';
import { FlatListProps, RefreshControl } from 'react-native';
import { EmptyListView, EmptyListViewProps } from '../EmptyList';
import { SkeletonLoadingItem } from '../SkeletonLoadingItem';
import {
  Container,
  List
} from './styles'
export interface ListViewProps<ItemT> extends FlatListProps<ItemT> {
  refreshing?: boolean;
  onRefresh?: () => void;
  emptyListViewProps?: EmptyListViewProps;
  isLoadingMore?: boolean;
  onLoadMore?: () => void;
  LoadingComponent?: React.ComponentType<any> | React.ReactElement | null;
}

export type ListViewFC<T = any> = React.FC<ListViewProps<T>>;

export const ListView: ListViewFC = (props) => {
  const {
    refreshing,
    ListFooterComponent,
    data,
    isLoadingMore,
    onLoadMore,
    LoadingComponent,
  } = props;

  const refreshIndicatorVisible =
    refreshing === true && (data?.length ?? 0) > 0;

  const skeletonDisplayable =
    (refreshing && data?.length === 0) || isLoadingMore;

  const onEndReached = React.useCallback(() => {
    if (!onLoadMore || isLoadingMore) {
      return;
    }
    onLoadMore();
  }, [isLoadingMore, onLoadMore]);

  const emptyItem = () => {
    if (refreshing) {
      return null;
    }
    return <EmptyListView {...props.emptyListViewProps} />;
  };

  const footer = () => {
    if (skeletonDisplayable) {
      if (LoadingComponent) {
        return LoadingComponent;
      }
      return (
        <>
          <SkeletonLoadingItem />
          <SkeletonLoadingItem />
          <SkeletonLoadingItem />
        </>
      );
    }
    return ListFooterComponent;
  };

  return (
    <Container>
      <List<any>
        {...props}
        ListEmptyComponent={emptyItem()}
        ListFooterComponent={footer()}
        refreshControl={
          <RefreshControl
            refreshing={refreshIndicatorVisible}
            onRefresh={props.onRefresh}
          />
        }
        onEndReached={onEndReached}
      />
    </Container>
  );
};
