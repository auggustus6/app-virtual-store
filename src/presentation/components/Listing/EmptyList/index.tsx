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
        <Container testID='empty-view'>
            <Text>
                {props.title ?? 'Oops!'}
            </Text>
            <Text>
                {props.content ?? 'Não foi possível encontrar o item'}
            </Text>
        </Container>
    );
};

