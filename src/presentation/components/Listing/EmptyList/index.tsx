import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export type EmptyListViewProps = {
    title?: string;
    content?: string;
};

export const EmptyListView: React.FC<EmptyListViewProps> = (props) => {
    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>
                {props.title ?? 'Oops!'}
            </Text>
            <Text
                style={styles.content}
            >
                {props.content ?? 'Không có dữ liệu!'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#000',
    },
    content: {
        fontSize: 8,
    },
});