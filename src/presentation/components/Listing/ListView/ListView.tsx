import React from 'react';
import {View, StyleSheet, FlatListProps, RefreshControl} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { EmptyListView, EmptyListViewProps } from '../EmptyList';

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
          {/* <SkeletonLoadingItem />
          <SkeletonLoadingItem />
          <SkeletonLoadingItem /> */}
        </>
      );
    }
    return ListFooterComponent;
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        {...props}
        ListEmptyComponent={emptyItem()}
        ListFooterComponent={footer()}
        refreshControl={
          <RefreshControl
            refreshing={refreshIndicatorVisible}
            onRefresh={props.onRefresh}
          />
        }
        style={styles.list}
        onEndReached={onEndReached}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});