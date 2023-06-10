type CustomCardProps = {
  tipo: string,
  status: string,
  preco: number,
  id: number
}

import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'

export const QuartoCard = ({tipo, preco, status, id}: CustomCardProps) => {
  return (
    <Box sx={{maxWidth: 350}}>

      <Card variant='outlined'>
        <CardMedia>
          <Image 
          src='/quarto.jpg' 
          alt='quarto generico'
          width='400'
          height='250'
          />
        </CardMedia>

        <CardContent>
      
          <Typography>
            {tipo} - {status}
          </Typography>
          <Typography>
            R${preco},00
          </Typography>

        </CardContent>

        <CardActions>
          <Link href={`/quartos/${id}`}>

            <Button size='small'>
              Ver detalhes
            </Button>

          </Link>
        </CardActions>
      </Card>

    </Box>
  )
}