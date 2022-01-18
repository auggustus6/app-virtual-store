import React from 'react';
import {
    Container,
    Text,
  } from './styles'

export type EmptyListViewProps = {
    title?: string;
    content?: string;
};

export const EmptyListView: React.FC<EmptyListViewProps> = (props) => {
    return (
        <Container>
            <Text>
                {props.title ?? 'Oops!'}
            </Text>
            <Text>
                {props.content ?? 'Không có dữ liệu!'}
            </Text>
        </Container>
    );
};

